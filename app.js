const { useState, useEffect } = React;

// Trash icon component
const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
    </svg>
);

// Plus icon component
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14m-7-7h14"/>
    </svg>
);

const SalesTaxCalculator = () => {
    const [total, setTotal] = useState('');
    const [subtotal, setSubtotal] = useState('');
    const [categories, setCategories] = useState([
        { id: 1, name: '', amount: '', taxPortion: '0.00', total: '0.00' }
    ]);

    // ...rest of the component logic
};

ReactDOM.render(<SalesTaxCalculator />, document.getElementById('root'));