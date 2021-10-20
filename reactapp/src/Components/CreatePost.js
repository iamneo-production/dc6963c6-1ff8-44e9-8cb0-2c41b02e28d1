import React, { Component } from 'react';

class CreatePost extends Component {
    render() {
        return (
            <div className="mt-5 px-2">
                <div className="card w-100 p-4 shadow">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <h5 className="card-title fs-3 fw-500">Create Post</h5>
                     <div className="d-flex ">
                     <button type="button" className="me-3 btn btn-outline-primary">Add</button>
                     <button type="button" className="btn btn-outline-success">Upload</button>
                     </div>
                    </div>
                    <input type="text"  className="form-control border-0 mt-3 px-0 shadow-none" name="username" placeholder="Enter a caption for your post..." />
                </div>
                </div>
            </div>
        );
    }
}

export default CreatePost;