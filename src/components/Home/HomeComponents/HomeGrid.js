import React, {useState, useEffect} from 'react'
import { Grid, Button } from 'semantic-ui-react'
import Tip from "./Tip";
import "../index.css"
import * as ROUTES from "../../../constants/routes";

export default function HomeGrid() {
  return (
      <div>
        <Grid stackable id={"home"}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Tip/>
            </Grid.Column>
            <Grid.Column width={13}>
              <div style={{
                background: "url('/img/nutrition.jpg')", backgroundSize: 'cover', width: '100%',
                height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
                backgroundPosition: "center", backgroundRepeat: 'no-repeat'
              }}>
                <Button primary style={{height: '55px', width: '200px', margin: '30px'}}>Nutrition</Button>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Tip/>
            </Grid.Column>
            <Grid.Column width={13}>
              <div style={{
                background: "url('/img/mental-health.png')", backgroundSize: 'cover', width: '100%',
                height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
                backgroundPosition: "center", backgroundRepeat: 'no-repeat'
              }}>
                <Button primary style={{height: '55px', width: '200px', margin: '30px'}}>Mental Health</Button>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Tip/>
            </Grid.Column>
            <Grid.Column width={13}>
              <div style={{
                background: "url('/img/coronavirus-banner.jpg')", backgroundSize: 'cover', width: '100%',
                height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
                backgroundPosition: "center", backgroundRepeat: 'no-repeat'
              }}>
                <Button primary style={{height: '55px', width: '200px', margin: '30px', padding: '20px'}}
                        href={ROUTES.COVID_NEWS}>
                  COVID-19
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
  )
}
