export default function CategoryFilter({ categories, setCurrentCategory }) {
  return (
    <aside>
      <ul>
        <li>
          <button
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory("all")}
          >
            Todos
          </button>
        </li>
        {categories.map((cat, i) => (
          <li key={i} className="category">
            <button
              className="btn btn-category"
              style={{ backgroundColor: `${cat.color}` }}
              onClick={() => setCurrentCategory(cat.name)}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
