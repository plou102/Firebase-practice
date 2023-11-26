import { ITweet } from "./Timeline";
import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useState } from "react";

export default function Tweet({ username, photo, tweet, userId, id }: ITweet) {
  const [isEdit, setIsEdit] = useState(false);
  const [Tweet, setTweet] = useState(tweet);

  const user = auth.currentUser;
  async function onDelete() {
    const checkMessage = confirm("이 트윗을 삭제하시겠습니까?");

    if (!checkMessage || user?.uid !== userId) return;

    try {
      await deleteDoc(doc(db, "tweets", id));
      if (photo) {
        const photoRef = ref(storage, `tweets/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (e) {
      console.log(e);
    }
  }

  function onTweetChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTweet(e.target.value);
  }

  async function onEdit() {
    if (!isEdit) {
      setIsEdit(true);
      return;
    }

    await updateDoc(doc(db, "tweets", id), {
      tweet: Tweet,
    });

    setIsEdit(false);
  }

  return (
    <Wrapper>
      <Column>
        <Username>{username}</Username>
        {isEdit ? (
          <EditInput type="text" onChange={onTweetChange} />
        ) : (
          <Payload>{Tweet}</Payload>
        )}
        {user?.uid === userId ? (
          <>
            <DeleteBtn onClick={onDelete}>delete</DeleteBtn>
            <EditBtn onClick={onEdit}>edit</EditBtn>
          </>
        ) : null}
      </Column>

      <Column>{photo ? <Photo src={photo} /> : null}</Column>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;

const Column = styled.div``;

const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const Payload = styled.p`
  margin: 10px 0;
  font-size: 18px;
`;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  float: right;
`;

const DeleteBtn = styled.button`
  background-color: tomato;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 50px;
  margin-right: 5px;
  cursor: pointer;
`;

const EditBtn = styled.button`
  background-color: #1d9bf0;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 50px;
  cursor: pointer;
`;

const EditInput = styled.input`
  display: block;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  width: 50%;
  padding: 5px 8px;
  margin: 10px 0;
`;
