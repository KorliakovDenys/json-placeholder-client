import {useEffect, useState} from "react";
import {createPostApi, deletePostApi, getPostApi, listPostsApi, updatePostApi} from "./api/apiFunctions.js";
import ModalWindow from "./components/ModalWindow.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingPost, setEditingPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [readingPost, setReadingPost] = useState(null);

  useEffect(() => {
    listPostsApi().then((response) => {
      setPosts(response);
    });
  }, []);

  const onReadPostClick = (postId) => {
    if (postId > 100/*api returns only 100 posts*/) {
      setReadingPost(posts.find(post => post.id === postId));//api cork
    } else {
      getPostApi(postId).then((response) => response && setReadingPost(response));
    }
    setModalOpen(true);
  };

  const onCloseModalClick = () => {
    setModalOpen(false);
    setReadingPost(null);
  }

  const onCreatePostClick = () => {
    createPostApi({title, body, userId: 1/*lets pretend we have real user id*/})
      .then((response) => setPosts([{
        ...response, id: posts.reduce((maxPost, post) => post.id > maxPost.id ? post : maxPost, posts[0]).id + 1 // api cork
      }, ...posts]));
    setTitle("");
    setBody("");
  };

  const onEditPostClick = (post) => {
    setEditingPost(post);
    setTitle(post.title);
    setBody(post.body);
  };

  const updatePost = (data) => {
    setPosts(posts.map((p) => (p && p.id === editingPost.id ? data : p)));
    setEditingPost(null);
    setTitle("");
    setBody("");
  }

  const onUpdatePostClick = () => {
    if (!editingPost) return;

    if (editingPost.id > 100) {
      updatePost({id: editingPost.id, title: title, body: body});
      return;
    }//api cork

    updatePostApi(editingPost.id, {title: title, body: body})
      .then((response) => updatePost(response));
  };

  const onDeletePostClick = (id) => {
    deletePostApi(id).then(() => {
      setPosts(posts.filter((p) => p && p.id !== id));
    });
  };

  return (<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <form
        className="mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          editingPost ? onUpdatePostClick() : onCreatePostClick();
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border p-2 w-full mb-2"
        ></textarea>
        <div className="flex justify-end">
          <button
            className={`${editingPost ? "bg-blue-500" : "bg-green-500"} text-white px-4 py-2 cursor-pointer`}
            type="submit"
          >
            {editingPost ? "Update Post" : "Create Post"}
          </button>
        </div>
      </form>
      <ul>
        {posts && posts.map((post) => (<li key={post.id} className="border p-2 mb-2">
            <h2 className="font-bold cursor-pointer hover:text-blue-500"
                onClick={() => onReadPostClick(post.id)}>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => onEditPostClick(post)}
                    className="bg-yellow-500 text-white px-2 py-1 mr-2 cursor-pointer">
              Edit
            </button>
            <button onClick={() => onDeletePostClick(post.id)}
                    className="bg-red-500 text-white px-2 py-1 cursor-pointer">
              Delete
            </button>
          </li>))}
      </ul>
      <ModalWindow modalOpen={modalOpen} onCloseClick={onCloseModalClick}>
        {readingPost && (<>
            <h2 className="font-bold">{readingPost.title}</h2>
            <p>{readingPost.body}</p>
          </>)}
      </ModalWindow>
    </div>)
}


export default App;
