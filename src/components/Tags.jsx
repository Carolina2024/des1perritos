import React from "react";
import Badge from "react-bootstrap/Badge"; /* sea agrega este import */
import "bootstrap/dist/css/bootstrap.min.css"; /* se agrega este import */

const Tags = ({ color, tag }) => {
  return (
    <h5>
      <Badge bg={color} style={{ width: "220px" }}>
        {tag}
      </Badge>
    </h5>
  );
};

export default Tags;
