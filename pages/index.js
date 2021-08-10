import Head from 'next/head';

export default function Home() {
  const Item = ({ id }) => <div>I am item: {id}</div>;
  const refs = useRef({});
  const gridRef = useRef();

  if (Object.keys(refs.current).length !== items.length) {
    items.forEach(({ id }) => {
      refs.current[id] = refs.current[id] || createRef();
    });
  }

  useEffect(() => {
    gridRef.current =
      gridRef.current ||
      GridStack.init(
        {
          float: true
        },
        '.controlled'
      );
    const grid = gridRef.current;
    grid.batchUpdate();
    grid.removeAll(false);
    items.forEach(({ id }) => grid.makeWidget(refs.current[id].current));
    grid.commit();
  }, [items]);

  return (
    <div>
      <button onClick={addItem}>Add new widget</button>
      <div className={`grid-stack controlled`}>
        {items.map((item, i) => {
          return (
            <div
              ref={refs.current[item.id]}
              key={item.id}
              className={'grid-stack-item'}
            >
              <div className="grid-stack-item-content">
                <Item {...item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
