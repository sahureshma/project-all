import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import { setShowDropdown,setShowModal } from "../../store/slices/taskSlices";

import Dropdown from "../organism/Dropdown/Dropdown";

import "./Card.css";
import CardInfo from "./CardInfo/CardInfo";
import { useDispatch, useSelector } from "react-redux";

function Card(props) {
  const dispatch = useDispatch();
  const showDropdown = useSelector((state)=>state.tasks.showDropdown);
  const showModal = useSelector((state)=>state.tasks.showModal)
  
  const { id, title, date, tasks, labels } = props.card;

  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (!date) return "";

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Aprl",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    return day + " " + month;
  };

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => dispatch(setShowModal(false))}
          card={props.card}
          boardId={props.boardId}
          updateCard={props.updateCard}
        />
      )}
      <div
        className="card"
        draggable
        onDragEnd={() => props.dragEnded(props.boardId, id)}
        onDragEnter={() => props.dragEntered(props.boardId, id)}
        onClick={() => dispatch(setShowModal(true))}
      >
        <div className="card_top">
          <div className="card_top_labels">
            {labels?.map((item, index) => (
              <label key={index} style={{ backgroundColor: item.color }}>
                {item.text}
              </label>
            ))}
          </div>
          <div
            className="card_top_more"
            onClick={(event) => {
              event.stopPropagation();
              dispatch(setShowDropdown(true));
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                class="board_dropdown"
                onClose={() => dispatch(setShowDropdown(false))}
              >
                <p onClick={() => props.removeCard(props.boardId,id)}>
                  Delete Card
                </p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="card_title">{title}</div>
        <div className="card_footer">
          {date && (
            <p className="card_footer_item">
              <Clock className="card_footer_icon" />
              {formatDate(date)}
            </p>
          )}
          {tasks && tasks?.length > 0 && (
            <p className="card_footer_item">
              <CheckSquare className="card_footer_icon" />
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;