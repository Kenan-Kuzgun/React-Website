import React from "react";
import "..//styles/contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="left-side"></div>
      <div className="right-side">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>
        <div class="control has-icons-left has-icons-right">
          <label class="label">e-Mail</label>
          <input class="input" type="email" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <label class="label">FeedBack</label>
        <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
      </div>
    </div>
  );
};
