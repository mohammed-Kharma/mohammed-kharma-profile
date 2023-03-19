import { configureStore } from "@reduxjs/toolkit";
import { ReducerBlog } from "./sciles/blog-scile";
import { ReducerContact } from "./sciles/contactUs";
import { ReducerEducation } from "./sciles/education-scile";
import { ReducerHome } from "./sciles/home-scile";
import { ReducerSkllis } from "./sciles/skllis-scile";
import { ReducerWork } from "./sciles/work-scile";

export const Store = configureStore({
    reducer:{
        dataHome : ReducerHome,
        dataSkllis : ReducerSkllis,
        dataEducation : ReducerEducation,
        dataWork : ReducerWork,
        dataBlog : ReducerBlog,
        dataContact : ReducerContact
    }
});