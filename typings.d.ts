//typings.d.ts because it's a definition typescript file

export interface Post {
    id:string;
    createdAt:string;
    title:string;
    author:{
        name:string;
        image:String;
    };
    comments:Comment[];
    description:string;
    mainImage:{
        asset:{
            url:string;
        };
    };
    slug:{
        current:string;
    }
    body:[object]
}
export interface Comment {
    approved:boolean;
    comment:string;
    email:string;
    name:string;
    post:{
        _ref:string;
        _type:string;
    };
    _createdAt:string;
    _id:string;
    _rev:string;
    _type:string;
    _updatedAt:string;
}