import React from "react";

export default function TextBox ({key,  css, text,}){
    console.log("cheia", key);
    return (
        <div key={key} style={css} className="text-box">
        {text}
    </div>
    )
}