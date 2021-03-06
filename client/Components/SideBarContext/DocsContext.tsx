/** @format */

import { React } from "../../../deps.ts";

const DocsContext = (props: any) => {
  const { setDocsPage } = props;

  return (
    <div id='docsTOC'>
      <div className='list-group pink-a-tags'>
        <button
          className={`list-group-item list-group-item-action ${
            props.docsPage === "Overview" ? "active" : ""
          }`}
          onClick={() => {
            setDocsPage("Overview");
          }}
        >
          Overview
        </button>
        <button
          className={`list-group-item list-group-item-action ${
            props.docsPage === "QuickStart" ? "active" : ""
          }`}
          onClick={() => {
            setDocsPage("QuickStart");
          }}
        >
          Quick Start
        </button>

        <button
          className={`list-group-item list-group-item-action ${
            props.docsPage === "GettingStarted" ? "active" : ""
          }`}
          onClick={() => {
            setDocsPage("GettingStarted");
          }}
        >
          ObsidianRouter
        </button>
        <div className='list-group-item'>
          <h6>ObsidianWrapper</h6>
          <div className='list-group'>
            <button
              className={`list-group-item list-group-item-action ${
                props.docsPage === "ServerSideRendering" ? "active" : ""
              }`}
              onClick={() => {
                setDocsPage("ServerSideRendering");
              }}
            >
              Server-Side Rendering
            </button>
            <button
              className={`list-group-item list-group-item-action ${
                props.docsPage === "Queries" ? "active" : ""
              }`}
              onClick={() => {
                setDocsPage("Queries");
              }}
            >
              Queries
            </button>
            <button
              className={`list-group-item list-group-item-action ${
                props.docsPage === "Mutations" ? "active" : ""
              }`}
              onClick={() => {
                setDocsPage("Mutations");
              }}
            >
              Mutations
            </button>
            <button
              className={`list-group-item list-group-item-action ${
                props.docsPage === "BasicsErrors" ? "active" : ""
              }`}
              onClick={() => {
                setDocsPage("BasicsErrors");
              }}
            >
              Errors
            </button>
            <button
              className={`list-group-item list-group-item-action ${
                props.docsPage === "Polling" ? "active" : ""
              }`}
              onClick={() => {
                setDocsPage("Polling");
              }}
            >
              Polling
            </button>
          </div>
        </div>
        <button
          className={`list-group-item list-group-item-action ${
            props.docsPage === "Philosophy" ? "active" : ""
          }`}
          onClick={() => {
            setDocsPage("Philosophy");
          }}
        >
          Philosophy
        </button>
        <div className='list-group-item'>
          <h6>Caching</h6>
          <div className='list-group'>
            <button
              className={`list-group-item list-group-item-action ${
                props.docsPage === "Strategies" ? "active" : ""
              }`}
              onClick={() => {
                setDocsPage("Strategies");
              }}
            >
              Strategies
            </button>
            <button
              className={`list-group-item list-group-item-action ${
                props.docsPage === "Client" ? "active" : ""
              }`}
              onClick={() => {
                setDocsPage("Client");
              }}
            >
              Client
            </button>
            <button
              className={`list-group-item list-group-item-action ${
                props.docsPage === "Server" ? "active" : ""
              }`}
              onClick={() => {
                setDocsPage("Server");
              }}
            >
              Server
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsContext;
