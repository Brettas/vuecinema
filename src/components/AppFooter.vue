<template>
  <div class="footer">
    <ul>
      <li>
        <a>Criado com VUE</a>
      </li>
      <li>
        <a href="https://www.themoviedb.org/documentation/api">The Movie Data Base API</a>
      </li>
      <li>
        <a href="https://github.com/Brettas/projetocinema">GitHub Do Projeto</a>
      </li>
      <li>
        <a href="https://github.com/Brettas/">By Vinicius Brêttas</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  margin: 0 auto;
  padding: 1em ;
  text-align: center;
  font-size: 1em;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0
}
li {
  display: block;
  padding: 1em;
}
a {
  font-size: 1em;
  color: white;
  &:hover {
    color: white;
    background-color: black;
    
  }
}
@include sm {
  .footer{
    max-width: 1000px;
  }
  ul{
    display: flex;
  }
  li {
    display: inline;
    padding-right: 2em;
    text-align: left;

    &:last-child{
      flex-grow: 1;
      padding-right: 1em;
      text-align: right;
    }
  }
}
</style>