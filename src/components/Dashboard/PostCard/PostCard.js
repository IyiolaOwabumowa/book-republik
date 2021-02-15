import React from "react";

const PostCard = () => {
  return (
    <div className="post-card">
      <div className="post-card-head">
        <div className="post-card-title">
          <p>Never should I have</p>
          <div className="post-card-mod">
            <p>Mod: Iyiola Owabumowa</p>
            <div className="user-aura"></div>
          </div>
        </div>
        <div className="post-card-invest flex">Invest in this story</div>
      </div>

      <div className="post-card-body">
        <p>
          Once upon a time in a far away land, a young prince lived in a shining
          castle. Although he had everything his heart desired, the prince was
          spoiled, selfish and unkind. But then one winter’s night, an old
          beggar woman came to the castle and offered him a single rose in
          return for shelter from the bitter cold. Repulsed by her haggard
          appearance, the prince sneered at the gift and turned the old woman
          away. But she warned him not to be deceived by appearances, for beauty
          is found within. And when he dismissed her again, the old woman’s
          ugliness melted away to reveal a beautiful enchantress. The prince
          tried to apologize, but it was too late, for she had seen that there
          was no love in his heart.
        </p>
      </div>
      <div className="post-card-footer">
        <div className="story-block">
          <div className="read-story-btn flex">Read this book</div>
          <div className="write-story-btn flex">Write page 1 & 2</div>
        </div>
        <div className="discussion-block">
          <div className="discussion-btn flex">
            Citizens of the republic's discussions (25)
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
