import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import { setShowDropdown } from "../../../store/slices/taskSlices";

import Card from "../../Card/Card";
import Dropdown from "../../organism/Dropdown/Dropdown";
import Editable from "../Editable/Editable";

import "./List.css";
import { useDispatch, useSelector } from "react-redux";

function List(props) {

  const dispatch = useDispatch();
  const showDropdown = useSelector((state)=>state.tasks.showDropdown)

  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          <span>{props.board?.cards?.length ||0}</span>
        </p>
        <div
          className="board_header_title_more"
          onClick={() => dispatch(setShowDropdown(true))}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard()}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
       
        ))}
        <Editable
          text="+ Add Card"
          placeholder="Enter Card Title"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
  );
}

export default List;