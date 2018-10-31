import React, { Component } from 'react';

class SmartTable extends Component {
    render() {
        return (
            <div>
                <div className="fg-table">
                    <div className="col fl c-3">
                        <div className="bl">3: 33.3%</div>
                    </div>
                    <div className="col fl c-4">
                        <div className="bl">4: 25%</div>
                    </div>
                    <div className="col fl c-4">
                        <div className="bl">4: 25%</div>
                    </div>
                    <div className="col fl c-4">
                        <div className="bl">4: 25%</div>
                    </div>
                    <div className="col fl c-10">
                        <div className="bl">aslkdja;sldalsdhalksdn;alsdljansdm,ahsjdn</div>
                    </div>
                    <div className="col fl c-10">
                        <div className="bl">10: 10%</div>
                    </div>
                    <div className="col fl c-10">
                        <div className="bl">10: 10%</div>
                    </div>
                    <div className="col fl fg-col">
                        <div className="bl">Flex 1</div>
                    </div>
                </div>
                <style jsx global>{`
                    .fg-table {
                        display: flex;
                        justify-content: space-between;
                    }
                    .fg-table .col {
                        text-align: center;
                        align-items: center;
                        word-wrap: break-word;
                        border: 6px solid black;
                    }
                    .fg-table .bl {
                        display: block;
                        width: 100%;
                        word-wrap: break-word;
                    }
                    .fg-table .col:first-child {
                        text-align: left;
                        align-items: center;
                        word-wrap: break-word;
                        border: 6px solid black;
                    }
                    .fl {
                        height: auto;
                        display: flex;
                        padding: 1vh;
                    }
                    .fg-col {
                        flex: 1;
                    }
                    .c-1 {
                        width: 100%;
                    }
                    .c-2 {
                        width: 50%;
                    }
                    .c-3 {
                        width: 33.3%;
                    }
                    .c-4 {
                        width: 25%;
                    }
                    .c-5 {
                        width: 20%;
                    }
                    .c-6 {
                        width: 16.6%;
                    }
                    .c-7 {
                        with: 14.27%;
                    }
                    .c-8 {
                        width: 12.5%;
                    }
                    .c-9 {
                        width: 11.11%;
                    }
                    .c-10 {
                        width: 10%;
                    }
                    .table-row {
                    }
                `}</style>
            </div>
        );
    }
}

export default SmartTable;
