// 노드js 모듈 문법
// https://nodejs.org/api/path.html#pathresolvepaths

var path = require("path");

module.exports = {
  mode: "none",
  // 어떤 파일로 진입해서 파일을 해석할 것인가에 대한 진입점
  entry: "./src/index.js",
  // 팩킹 된 결과물
  // path: 결과물을 반환할 경로
  // filename: 결과물의 이름
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};

// 웹팩을 적용하게 되면 하나의 웹 페이지를 띄울 때, 라이브러리 리퀘스트 횟수를 줄일 수 있음
