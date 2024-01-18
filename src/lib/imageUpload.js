import axios from "axios"

export const imageUpload = async (image) => {
    const formData = new FormData()
    formData.append("image", image)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=47d4866376ca26dbe4c4273191d59234`, formData)
    return data
}