import React from 'react';
import Card from '../components/Card/Card';
import CardFooter from '../components/CardFooter/CardFooter';
import StatPanelGroup from '../components/StatPanelGroup/StatPanelGroup';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';

const Home = (props) => {
    return (
        <React.Fragment>
            <h2>Statistics</h2>
                <Card type="card-1">
                    <StatPanelGroup items={props.stats}/>
                    <p>This card has a shadow of size 1 and a hover effect. It contains a StatPanelGroup component,
                        which in turn contains three StatPanel components.</p>
                </Card>
                <h2>Simple Data</h2>
                <Card type="card-2">
                    <Table data={props.data}/>
                </Card>
                <Card type="card-3">
                    <h2>This is a Card component</h2>
                    <p>With shadow size 3.</p>
                    <CardFooter>
                        <p>I'm in the footer.</p>
                    </CardFooter>
                </Card>
                <Card type="primary card-4">
                    <h2>This is a Card component</h2>
                    <p>Primary colour, with shadow size 4.</p>
                </Card>
                <Button text="click-me"/>
                <Card type="secondary card-5">
                    <h2>This is a Card component</h2>
                    <p>Secondary colour, with shadow size 5.</p>
                </Card>
        </React.Fragment>
    );
}

export default Home;