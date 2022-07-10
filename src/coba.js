import React, { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "./networks/api";
import { useCallback } from "react";


export default function Coba() {
    const [image, setImage] = useState()
    const fetchData = useCallback(async () => {
        const response = await axiosInstance
            .get("v1/user/image", {
                headers: {
                    "Content-Type": "application/octet-stream"
                }
            })
            .then((response) => {
                const imageBlob = new Blob([response], { type: "image/png" })
                const reader = new FileReader();
                reader.readAsDataURL(imageBlob)
                reader.onload = () => {
                    const base64data = reader.result;
                    setImage(base64data)
                    console.log(base64data)
                }
                console.log(imageBlob)
                console.log("reader", reader)
            }).catch((error) => {
                console.log(error)
            })
        return response
    }, [])

    console.log("inmi image", image)

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div>
            <h1>coba!</h1>
            <img src={`data:image/png;base64,${image}`} alt="gambar goib" />
            <div>{image}</div>
        </div>
    )
}