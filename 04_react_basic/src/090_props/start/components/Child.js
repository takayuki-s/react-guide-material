/* POINT Props の受け取り方
親コンポーネントで属性値のように記述した各値は、１つのオブジェクトとして子コンポーネントで受け取ることができる。
 */


import "./Child.css";

const Child = ({ color: c = 'green', num, fn, bool, obj }) => {

  return (
    <div className={`component ${c}`}>
      <h3>Hello Component</h3>
    </div>
  );
};

export default Child;
