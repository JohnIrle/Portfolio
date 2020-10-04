import React from "react";
import { Container } from "react-bootstrap";

const Uses = () => {
  return (
    <Container style={{ marginTop: "70px" }}>
      <h1>A listing of various tools I use.</h1>
      <h2>Editors</h2>
      NeoVim
      <ul>
        <li>Theme: Gruvbox</li>
        <li>Completion: CoC</li>
        <li>
          Plugins: fzf, vim-fugitive, vim-dispatch, auto-pairs, vim-airline,
          typescript-vim, vim-startify
        </li>
      </ul>
      VSCode
      <ul>
        <li>Theme: Gruvbox</li>
        <li>
          Extensions: Vim, Peacock, ES7 React/Redux/GraphQL/React-Native
          snippets
        </li>
      </ul>
      Intellij Idea for Java
      <hr />
      <h2>Terminal</h2>
      Iterm 2
      <ul>
        <li>Theme: Gruvbox</li>
        <li>Font: Jetbrains Mono Nerd Font</li>
      </ul>
      ZShell
      <ul>
        <li>Oh My Zsh</li>
      </ul>
      Package Manager: Homebrew <hr />
      <h2>Hardware</h2>
      <ul>
        <li>Desktop: iMac (Retina 4K, 21.5-inch, 2017)</li>
        <li>Laptop: MacBook Pro (13-inch, 2017, Two Thunderbold 3 ports)</li>
        <li>Headphones: Audio Technica ATH-M50x</li>
      </ul>
    </Container>
  );
};

export default Uses;
