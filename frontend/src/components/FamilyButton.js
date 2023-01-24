const FamilyButton = ({ family, drinkIsActive, foodIsAcitve }) => {
    return (
        <button className={family === 'drinks' ? 'family-btn-drinks' : 'family-btn-food'} name={family}>{family.toUpperCase()}</button>
    )
}

export default FamilyButton;