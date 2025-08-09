import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        const toastId = post 
            ? toast.loading("Updating your post...")
            : toast.loading("Publishing your post...");
            
        try {
            if (post){
                const file = data.image[0] ? await appwriteService.upload_file(data.image[0]) : null;

                if (file) {
                    appwriteService.delete_file(post.featuredImage);
                }

                const dbPost = await appwriteService.update_post(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                });

                if (dbPost) {
                    toast.update(toastId, {
                        render: "Post updated successfully! ✨",
                        type: "success",
                        isLoading: false,
                        autoClose: 3000,
                    });
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                const file = await appwriteService.upload_file(data.image[0]);

                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    const dbPost = await appwriteService.create_post({ ...data, userId: userData.$id });

                    if (dbPost) {
                        toast.update(toastId, {
                            render: "Post published successfully! 🎉",
                            type: "success",
                            isLoading: false,
                            autoClose: 3000,
                        });
                        navigate(`/post/${dbPost.$id}`);
                    }
                }
            }
        } catch (error) {
            toast.update(toastId, {
                render: error.message || "Something went wrong. Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 4000,
            });
            console.error("Post submission error:", error);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            let slug = value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-") // Replace special chars with hyphens
                .replace(/\s+/g, "-") // Replace spaces with hyphens
                .replace(/^[-_\.]+/, "") // Remove leading special chars
                .replace(/[-_\.]+$/, "") // Remove trailing special chars
                .replace(/[-_\.]{2,}/g, "-") // Replace multiple consecutive special chars with single hyphen
                .substring(0, 36); // Limit to 36 characters
            
            // Ensure it doesn't start with a special character
            if (slug && /^[^a-zA-Z0-9]/.test(slug)) {
                slug = "post-" + slug.substring(1, 31); // Add prefix and ensure length limit
            }
            
            // If slug is empty or invalid, generate a fallback
            if (!slug || slug.length === 0) {
                slug = "post-" + Date.now().toString().slice(-10); // Use timestamp as fallback
            }
            
            return slug;
        }

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {post ? "Update Your Blog" : "Create New Blog"}
                </h1>
                <p className="text-gray-300">
                    {post ? "Make changes to your existing post" : "Share your knowledge with the world"}
                </p>
            </div>
            
            <form onSubmit={handleSubmit(submit)} className="space-y-6">
                <div className="space-y-6">
                    <Input
                        label="Title"
                        placeholder="Enter your blog title..."
                        className="mb-4"
                        {...register("title", { required: true })}
                    />
                    <Input
                        label="Slug"
                        placeholder="URL slug (auto-generated)"
                        className="mb-4"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <div className="mb-4">
                        <RTE label="Content" name="content" control={control} defaultValue={getValues("content")} />
                    </div>
                </div>
                
                <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-6">Publication Settings</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <Input
                                label="Featured Image"
                                type="file"
                                className="mb-4"
                                accept="image/png, image/jpg, image/jpeg, image/gif"
                                {...register("image", { required: !post })}
                            />
                            {post && (
                                <div className="w-full mb-4">
                                    <img
                                        src={appwriteService.getFilePreview(post.featuredImage)}
                                        alt={post.title}
                                        className="rounded-lg w-full max-w-xs object-cover border border-gray-600"
                                    />
                                </div>
                            )}
                        </div>
                        
                        <div className="flex flex-col">
                            <Select
                                options={["active", "inactive"]}
                                label="Status"
                                className="mb-6"
                                {...register("status", { required: true })}
                            />
                            <Button 
                                type="submit" 
                                bgColor={post ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"} 
                                className="w-full md:w-auto py-3 px-8 font-semibold rounded-lg transition-all duration-200 mt-auto"
                            >
                                {post ? "Update Blog" : "Publish Blog"}
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}