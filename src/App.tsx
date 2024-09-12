import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AddPost } from "./pages/AddPost";
import { Post } from "./pages/Post";
import { EditPost } from "./pages/EditPost";
import "./App.css";

interface IPost {
  id: string;
  content: string;
  created: string;
}

export default function App() {
  const [posts, setPosts] = useState<IPost[]>([]); //посты

  const [form, setForm] = useState({
    //форма ввода
    content: "",
  });

  const [formEdit, setFormEdit] = useState({
    //форма редактирования
    content: "",
  });

  const [activePost, setActivePost] = useState({
    //выбранный пост
    id: "",
    content: "",
    created: "",
  });

  const url = "http://localhost:7070/posts";

  const getAllPosts = async () => {
    //получение всех постов
    const response = await fetch(url, {
      method: "GET",
    });
    const result = await response.json();
    setPosts(result); //отправка постов в state
  };

  const createPost = async (content: string) => {
    //создание нового поста
    const post = {
      content,
    };
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(post),
    });
    getAllPosts();
  };

  const deletePost = async (id: string) => {
    // удаление поста по id
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    getAllPosts();
  };

  const readPost = async (id: string) => {
    // получение поста по заданному id
    const response = await fetch(`${url}/${id}`, {
      method: "GET",
    });
    const result = await response.json();
    setActivePost(result.post); //отправка активного поста в state
  };

  const updatePost = async (id: string, content: string) => {
    //изменение поста
    const post = {
      id,
      content,
    };
    await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(post),
    });
    getAllPosts();
  };

  const loadData = () => {
    // загрузка всех постов
    getAllPosts();
  };

  useEffect(loadData, []); // первая загрузка всех постов

  const onAddPostHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // отправляем текст из input ввода в state формы
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitPostHandler = (e: React.FormEvent<HTMLFormElement>) => {
    // отправляем текст из state формы в запрос на новый пост
    e.preventDefault();
    createPost(form.content);
    setForm({ content: "" });
  };

  const onDeletePostHandler = (e: any) => {
    // событие удаления поста по id
    e.preventDefault();
    const target = e.target;
    deletePost(target.closest(".post-view").id);
  };

  const onUpdatePostHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // отправляем текст из input редактирования в state формы редактирования
    const { name, value } = e.target;
    setFormEdit((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitUpdatePostHandler = (e: React.FormEvent<HTMLFormElement>) => {
    // отправляем текст из state формы редактирования на сервер
    e.preventDefault();
    updatePost(activePost.id, formEdit.content);
    setFormEdit({ content: "" });
  };

  const onReadPostHandler = (e: any) => {
    // событие получения поста по id
    e.preventDefault();
    const target = e.target;
    readPost(target.closest("li").id);
  };

  // При открытии формы редактирования (например, в компоненте Post)
  const openEditForm = () => {
    // Заполните состояние formEdit значением текста поста для редактирования
    setFormEdit({ content: activePost.content });
    // Здесь также можно показать форму редактирования, например, изменяя роут или состояние для отображения формы
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout posts={posts} onClick={onReadPostHandler} />}
        >
          <Route
            path="/new"
            element={
              <AddPost
                title="add-post"
                onChange={onAddPostHandler}
                onSubmit={onSubmitPostHandler}
                content={form.content}
              />
            }
          />
          <Route
            path="/posts/:id"
            element={
              <Post
                activePost={activePost}
                onClick={onDeletePostHandler}
                openEditForm={openEditForm}
              />
            }
          />
          <Route
            path="/posts/:id/edit"
            element={
              <EditPost
                title="edit-post"
                onChange={onUpdatePostHandler}
                onSubmit={onSubmitUpdatePostHandler}
                content={formEdit.content}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}