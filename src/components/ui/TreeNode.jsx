// src/components/ui/TreeNode.js

import PropTypes from 'prop-types';
import React from 'react';
import UserProfile from './../../assets/images/userProfile.png';

function TreeNode({ node, addNode }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <img src={UserProfile} alt="profile" className="w-12 h-12" />
          <p>{node.name}</p>
        </div>
        {node.name === '+' ? (
          <button onClick={() => addNode(node.id)} className="text-blue-500">
            +
          </button>
        ) : null}
      </div>
      {node.children.length > 0 && (
        <div className="flex gap-4 mt-4">
          {node.children.map(child => (
            <TreeNode key={child.id} node={child} addNode={addNode} />
          ))}
        </div>
      )}
    </div>
  );
}

// Define the prop types for TreeNode
TreeNode.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        children: PropTypes.array, // Can be an array or undefined
      }),
    ).isRequired,
  }).isRequired,
  addNode: PropTypes.func.isRequired,
};

export default TreeNode;
