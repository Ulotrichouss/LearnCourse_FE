import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactTags from "react-tag-autocomplete";

function Autocomplete({ skill }) {
  const [tags, setTags] = useState([]);
  var arrTemp = [];

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    skill.map((item, index) => {
      arrTemp.push({ id: index, name: item.skill });
    });
    setSuggestions(arrTemp);
  }, []);

  const reactTags = useRef();

  const onDelete = useCallback(
    (tagIndex) => {
      setTags(tags.filter((_, i) => i !== tagIndex));
    },
    [tags]
  );

  const onAddition = useCallback(
    (newTag) => {
      setTags([...tags, newTag]);
    },
    [tags]
  );

  return (
    <ReactTags
      ref={reactTags}
      tags={tags}
      suggestions={suggestions}
      onDelete={onDelete}
      onAddition={onAddition}
      id={arrTemp.id}
    />
  );
}

export default Autocomplete;
