import createEngine,{
    DefaultLinkModel,
    DefaultNodeModel,
    DiagramModel
} from '@projectstorm/react-canvas-core';
import ReactDOM from 'react-dom';
import React from 'react';

function BasicConnections(){

    const engine = createEngine();


    const node1 = new DefaultNodeModel({
        name : 'Source',
        color: 'rgb(0,192,255)',
    });

    node1.setPosition(100,100);
    let port1 = node1.addOutPort('Out');


    const node2 = new DefaultNodeModel({
        name: 'Destination',
        color: 'rgb(0,192,255)',
    })


    node2.setPosition(300,70);
    let port2 = node2.addOutPort('Out');

    const link = port1.link<DefaultLinkModel>(port2)
    link.addLabel('Hello World');

    const model = new DiagramModel();
    model.addAll(node1, node2, link);
    engine.setModel(model);

    ReactDOM.render(engine, document.getElementById('App'));
    return(
        <div id="App">
            
        </div>
    );
}
export default BasicConnections;