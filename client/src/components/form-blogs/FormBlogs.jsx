import React, { useEffect, useState } from "react";
import "./FormBlogs.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axiosClient from "../../api/axios";
import ReactPaginate from "react-paginate";
const FormBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  useEffect(() => {
    axiosClient({
      method: "GET",
      url: "api/v1/blog",
    }).then((data) => {
      console.log(data.data);
      setBlogs(data.data);
    });
  }, []);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <div className="formDiv">
      <h1>Blogs Panel</h1>
      <button></button>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>USERID</th>
            <th>TITLE</th>
            <th>BODY</th>
            <th style={{ width: "200px" }}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {blogs &&
            blogs
              .slice(
                currentPage * itemsPerPage,
                (currentPage + 1) * itemsPerPage
              )
              .map((blog, index) => {
                return (
                  <tr key={index}>
                    <td>{blog.id}</td>
                    <td>{blog.userId}</td>
                    <td>{blog.title}</td>
                    <td>{blog.body}</td>
                    <td>
                      <button className="btn deleteBtn">
                        <AiFillDelete className="delete" />
                      </button>{" "}
                      <button className="btn editBtn">
                        <AiFillEdit className="edit" />
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      {/* Thanh phân trang */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(blogs.length / itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        className="paginate"
      />
    </div>
  );
};

export default FormBlogs;
