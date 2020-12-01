import React, {useState} from 'react'
import {Typography, Button, Form, Input} from 'antd';
import FileUpload from "../../utils/FileUpload"
import Axios from 'axios';

const { TextArea } = Input;
const Brands = [
    {key:1, value:"Nike"},
    {key:2, value:"adidas"},
    {key:3, value:"new balance"},
    {key:4, value:"converse"},
    {key:5, value:"reebok"}
]
function UploadProductPage(props) {


    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Brand, setBrand] = useState(1)
    const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }
    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }
    const brandChangeHandler = (event) => {
        setBrand(event.currentTarget.value)
    }
    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }
    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if(!Title || !Description || !Price || !Brand || !Images){
            return alert("모든 값을 넣어주셔야 합니다.")
        }
        //서버에 데이터를 보낸다.
        const body = {
            //로그인 된 사람의 아이디를 가져와야함
            writer: props.user.userData._id,
            title: Title,
            description: Description,
            price: Price,
            images: Images,
            brands: Brand
        }
        Axios.post("/api/product",body)
            .then(response => {
                if(response.data.success){
                    alert('상품 업로드에 성공 했습니다.')
                    props.history.push('/')
                }else{
                    alert('상품 업로드에 실패 했습니다.')
                }
            })
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign: 'center', marginBottom: '2rem'}}>
                <h2>신발 업로드</h2>

            </div>
            
            <Form onSubmit={submitHandler}>
                <FileUpload refreshFunction={updateImages}/>
                <br />
                <br />
                <label>신발명</label>
                <Input onChange={titleChangeHandler} value={Title}/>
                <br />
                <br />
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description}/>
                <br />
                <br />
                <label>가격</label>
                <Input onChange={priceChangeHandler} value={Price}/>
                <br />
                <br />
                <select onChange={brandChangeHandler} value={Brand}>
                   {Brands.map(item => (
                       <option key={item.key} value={item.key}>{item.value}</option>
                   ))}
                </select>
                <br />
                <br />
                <button type="submit">
                    확인
                </button>
            </Form>
        </div>
    )
}

export default UploadProductPage
