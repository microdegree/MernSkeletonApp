import React, { useState } from 'react'

const UploadProjectImage = (props) => {

    const [value, setValue] = useState()


    const handleChange = (e) => {
        setValue(e.target.files[0]); // you get all the files object here
    }

    const uploadImageInServer = (e) => {
        e.preventDefault();
        console.log('In uploadImageInServer 1')
        const formData = new FormData();
        formData.append('avatar', value)

        fetch('/api/admin/uploadProjectImage', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log('upload success')
                props.history.push('./myAppointments')

                props.history.push({
                    pathname: './addProject',
                    fileNameImage: data.uploadedFileName
                })

            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            Upload Project Image

            <form encType="multipart/form-data" onSubmit={uploadImageInServer}>
                <label for="avatar">Select image:</label>
                <input type="file" id="avatar" name="avatar" accept="image/*" onChange={handleChange} />
                <input type="submit" />
            </form>

        </div>
    )





}

export default UploadProjectImage
