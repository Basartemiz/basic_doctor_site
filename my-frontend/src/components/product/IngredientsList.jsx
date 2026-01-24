import { useState } from 'react'
import './IngredientsList.css'

function IngredientsList({ ingredients }) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!ingredients || ingredients.length === 0) {
    return null
  }

  const keyIngredients = ingredients.filter(i => i.isKeyIngredient)
  const otherIngredients = ingredients.filter(i => !i.isKeyIngredient)

  return (
    <div className="ingredients-list">
      <h4 className="ingredients-title">Anahtar Icerikler</h4>
      <div className="key-ingredients">
        {keyIngredients.map((ingredient, index) => (
          <div key={index} className="ingredient-card key">
            <span className="ingredient-name">{ingredient.name}</span>
            <span className="ingredient-benefit">{ingredient.benefit}</span>
          </div>
        ))}
      </div>

      {otherIngredients.length > 0 && (
        <>
          <button
            className="ingredients-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Diger icerikleri gizle' : `Diger ${otherIngredients.length} icerigi goster`}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="16"
              height="16"
              style={{ transform: isExpanded ? 'rotate(180deg)' : 'none' }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {isExpanded && (
            <div className="other-ingredients">
              {otherIngredients.map((ingredient, index) => (
                <div key={index} className="ingredient-card">
                  <span className="ingredient-name">{ingredient.name}</span>
                  <span className="ingredient-benefit">{ingredient.benefit}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default IngredientsList
