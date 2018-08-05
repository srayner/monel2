import React from 'react';
import Card from '../components/Card/Card';
import CardFooter from '../components/CardFooter/CardFooter';
import StatPanelGroup from '../components/StatPanelGroup/StatPanelGroup';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';

const Home = (props) => {
    return (
        <div className="grid">
            <div>
                <h2>Statistics</h2>
                <Card type="card-2">
                    <StatPanelGroup items={props.stats}/>
                    <p>This card has a shadow of size 2. It contains a StatPanelGroup component,
                    which in turn contains three StatPanel components.</p>
                </Card>
            </div>
            <div>
                <h2>Primary Card</h2>
                <Card type="primary card-2">
                    <h2>This is a Card component</h2>
                    <p>Primary colour, with shadow size 4.</p>
                </Card>
            </div>
            <div>
                <h2>Simple Data</h2>
                <Card type="card-2">
                    <Table data={props.data}/>
                </Card>
            </div>
            <div>
                <h2>Secondary Card</h2>
                <Card type="secondary card-2">
                    <h2>This is a Card component</h2>
                    <p>Secondary colour, with shadow size 5.</p>
                </Card>
            </div>
        </div>
    );
}

export default Home;