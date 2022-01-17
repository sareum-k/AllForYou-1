import React, { useState, useEffect } from "react";
import axios from 'axios';
import style from "./forYou.module.css";
import ForYouCard from "../components/forYouCard";
import { useNavigate } from "react-router-dom";
import { loginModal } from '../action/index';
import { useDispatch } from 'react-redux';

const ForYou = ({ isLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selected, setSelected] = useState("최신순");
  const [review, setReview] = useState([]);

  const filteredCategory = review.filter((el) => {
    let category = el.category;
    if (selectedCategory === "ALL") {
      return category;
    } else if (category === selectedCategory) {
      return category;
    }
  });

  // const categoryChange = filteredCategory.map((el) => {
  //   if(el.category === '도전'){
  //     return el.category = '도전하고 싶은 나에게'
  //   } else if(el.category === '동기부여'){
  //     return el.category = '동기부여를 받고 싶다면?'
  //   } else if(el.category === '멘토'){
  //     return el.category = '현재 나의 상황에 멘토를 원하시나요?'
  //   } else if(el.category === '편안함'){
  //     return el.category = '마음속 편안함을 찾는다면?'
  //   } else if(el.category === '웃음'){
  //     return el.category = '생각없이 웃고 싶다면?'
  //   } else if(el.category === '눈물'){
  //     return el.category = '오늘 한 없이 눈물을 쏟고 싶다면?'
  //   } 
  // })

  const getreviews = ()=> {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews`)
      .then((res) => {
        if (res.status === 200) {
          setReview(res.data.data)
          console.log(res.data.data)
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const getLikereviews = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews?sort=like`)
      .then((res) => {
        if (res.status === 200) {
          setReview(res.data.data)
          console.log(res.data.data)
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const getUserLikes = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/reviews/get/userlike`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const handleLoginStatus = () => {
    if (!isLogin) {
      dispatch(loginModal(true));
      return;
    }
    navigate("/foryouwriting")
  }

  useEffect(() => {
    getreviews()
    getUserLikes()
  }, []);

  useEffect(() => {
    if (selected === '좋아요순') {
      getLikereviews()
    } else {
      getreviews()
    }
  }, [selected]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.selectbox}>
          <select
            className={style.category}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="ALL">ALL</option>
            <option value="동기부여">동기부여를 받고 싶다면?</option>
            <option value="도전">도전하고 싶은 나에게</option>
            <option value="멘토">현재 나의 상황에 멘토를 원하시나요?</option>
            <option value="편안함">마음속 편안함을 찾는다면?</option>
            <option value="웃음">생각없이 웃고 싶다면?</option>
            <option value="눈물">오늘 한 없이 눈물을 쏟고 싶다면?</option>
            <option value="백색소리">백색소리</option>
          </select>
          <select
            className={style.sort}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="최신순">최신순</option>
            <option value="좋아요순">좋아요순</option>
          </select>
        </div>
        <button
          className={style.btn}
          onClick={handleLoginStatus}
        >작성하기</button>
      </div>
      <div className={style.cardContainer}>
        {filteredCategory.map((review) => (
          <ForYouCard
            key={review.id}
            review={review}
          />
        ))}
      </div>
    </div>
  );
};

export default ForYou;