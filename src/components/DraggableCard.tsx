import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 5px 10px;
  border-radius: 5px;
  margin: 5px;
`;

interface IDraggable {
  todo: string;
  index: number;
}

function DraggableCard({ todo, index }: IDraggable) {
  console.log(`${todo} is render`);
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
