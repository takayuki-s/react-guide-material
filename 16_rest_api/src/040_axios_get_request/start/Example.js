import { useEffect } from "react";
import axios from "axios";

const Example = () => {
  useEffect(() => {
    // .thenを使う場合
    // axios.get('http://localhost:3003/user').then((res) => {
      //   console.log(res.data)
      // })

    // async awaitを使う場合
    const getUser = async () => {
      const res = await axios.get('http://localhost:3003/user')
      console.log(res.data)
    }
    getUser()
  })
};

export default Example;
