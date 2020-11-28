import 'semantic-ui-css/semantic.min.css'
import React from 'react';

export default function LikeButton(props) {
  const [likeCount, setLikeCount] = React.useState(0)
  return (
    <div class="ui labeled button" tabindex="0">
      <div class="ui button" onClick={() => setLikeCount(count => count + 1)}>
        <i class="heart icon"></i> Like
      </div>
      <a class="ui basic label" onClick={() => setLikeCount(count => count + 1)}>{likeCount}</a>
    </div>
  );
}
