import React from 'react'
import FoodItem from './FoodItem'
export default function Memu() {
  return (
    <div>
      <div>
        <h2>Chaats</h2>
        <hr />
        <div className="column">
            {/* food item component will come here */}
            <FoodItem />
        </div>
      </div>
      <div>
        <h2>Main Course</h2>
        <hr />
        <div className="column">
            {/* food item component will come here */}
            <FoodItem />
        </div>
      </div>
      <div>
        <h2>Main Course</h2>
        <hr />
        <div className="column">
            {/* food item component will come here */}
            <FoodItem />
        </div>
      </div>
    </div>
  )
}
