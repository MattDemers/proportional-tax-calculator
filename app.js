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

    const handleCategoryChange = (id, field, value) => {
        const updatedCategories = categories.map(category => {
            if (category.id === id) {
                return { ...category, [field]: value };
            }
            return category;
        });
        setCategories(updatedCategories);
    };

    const addCategory = () => {
        const newCategory = {
            id: categories.length + 1,
            name: '',
            amount: '',
            taxPortion: '0.00',
            total: '0.00'
        };
        setCategories([...categories, newCategory]);
    };

    const removeCategory = (id) => {
        const updatedCategories = categories.filter(category => category.id !== id);
        setCategories(updatedCategories);
    };

    useEffect(() => {
        const subtotal = categories.reduce((acc, category) => acc + parseFloat(category.amount || 0), 0);
        setSubtotal(subtotal.toFixed(2));
        const total = categories.reduce((acc, category) => acc + parseFloat(category.total || 0), 0);
        setTotal(total.toFixed(2));
    }, [categories]);

    return (
        <div>
            <h1>Proportional Tax Calculator</h1>
            <table>
                <thead>
                    <tr>
                        <th className="header-cell">Category</th>
                        <th className="header-cell">Amount</th>
                        <th className="header-cell">Tax Portion</th>
                        <th className="header-cell">Total</th>
                        <th className="header-cell">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>
                                <input
                                    type="text"
                                    value={category.name}
                                    onChange={(e) => handleCategoryChange(category.id, 'name', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={category.amount}
                                    onChange={(e) => handleCategoryChange(category.id, 'amount', e.target.value)}
                                />
                            </td>
                            <td className="numeric-cell">{category.taxPortion}</td>
                            <td className="numeric-cell">{category.total}</td>
                            <td>
                                <button onClick={() => removeCategory(category.id)}>
                                    <TrashIcon />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="total-row">
                        <td colSpan="3">Subtotal</td>
                        <td className="total-amount">{subtotal}</td>
                        <td></td>
                    </tr>
                    <tr className="total-row">
                        <td colSpan="3">Total</td>
                        <td className="total-amount">{total}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            <button onClick={addCategory}>
                <PlusIcon /> Add Category
            </button>
        </div>
    );
};

ReactDOM.render(<SalesTaxCalculator />, document.getElementById('root'));