interface PostData {
    id: string;
    category: string;
    title: string;
    content: string;
}
export declare class PostController {
    private posts;
    createPost(postData: PostData): {
        result: boolean;
        data: PostData;
        message: string;
    };
    updatePost(id: string, updatedData: PostData): {
        result: boolean;
        data: PostData;
        message: string;
    };
    deletePost(id: string): {
        result: boolean;
        message: string;
    };
}
export {};
