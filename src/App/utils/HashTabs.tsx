import React, { SyntheticEvent } from 'react';
import { Tabs } from 'react-bootstrap';
import { withRouter, RouteComponentProps, StaticContext } from 'react-router';
import { Action, LocationState, UnregisterCallback } from 'history';

interface HashParam {
  name: string;
  value: string;
};

export interface HashTabsParams {}

export interface HashTabsState {
  hashParams: HashParam[];
  activeKey: string;
}

export interface HashTabsProps {
  id: string;
  defaultActiveKey: string;
  variant: 'tabs' | 'pills';
  className?: string;
  onSelect?: () => void;
}

type HashTabsPropsType = HashTabsProps & RouteComponentProps<HashTabsParams, StaticContext, LocationState>;

class HashTabs extends React.Component<HashTabsPropsType, HashTabsState> {

  private unregister: UnregisterCallback | null = null;

  constructor( props: HashTabsPropsType ) {
    super( props );
    const hash: string = props.location.hash.substring( 1 );
    const hashParams: HashParam[] = this.parseHashString( hash );
    this.state = this.calculateState( props, hashParams );
    this.urlDidChangeHandler = this.urlDidChangeHandler.bind( this );
    this.tabDidSelectHandler = this.tabDidSelectHandler.bind( this );
  }

  componentDidMount(): void {
    this.unregister = this.props.history.listen( this.urlDidChangeHandler );
  }

  componentWillUnmount(): void {
    //Onsole.log('componentWillUnmount');
    if ( this.unregister !== null ) {
      this.unregister();
    }
  }

  // I have big problems with providing Type checks here in this callback function
  urlDidChangeHandler( loc: any, action: Action ): void {
    const location: Location = loc;
    const hash: string = location.hash.substring( 1 );
    const hashParams = this.parseHashString( hash );
    const newState: HashTabsState = this.calculateState( this.props, hashParams );
    this.setState( newState );
  }

  tabDidSelectHandler( eventKey: string, e: SyntheticEvent<unknown> ): void {
    // Console.log('selected', `${this.props.id}.${eventKey}`);
    if ( this.props.onSelect ) {
      this.props.onSelect();
    }
    let params = this.state.hashParams.slice();
    let param: HashParam | undefined = params.find( ( p ) => p.name === this.props.id );
    if ( param === undefined ) {
      param = {
        name: this.props.id,
        value: eventKey,
      };
      params.push( param );
    } else {
      param.value = eventKey; // Modify existing param
    }
    const newHash: string = this.serializeHashParams( params );
    let location = this.props.location;
    location.hash = '#' + newHash;
    location.state = 'onClickTab';
    this.props.history.push( location );
  }

  private parseHashString( hash: string ): HashParam[] {
    return hash.split( '&' ).filter( ( v ) => v !== '' ).map( ( kv ) => {
      let tmp = kv.split( '=' );
      let param: HashParam = {
        name: tmp[0],
        value: tmp[1],
      };
      return param;
    } );
  }

  private serializeHashParams( hashParams: HashParam[] ): string {
    return hashParams.map( ( param ) => {
      let kv: string = '';
      if ( param.value === undefined ) {
        kv = param.name;
      } else {
        kv = `${param.name}=${param.value}`;
      }
      return kv;
    } ).join( '&' );
  }

  private calculateState( props: HashTabsPropsType, hashParams: HashParam[] ): HashTabsState {
    const id = props.id;
    const params = hashParams.filter( ( param ) => param.name === id );
    let activeKey: string = props.defaultActiveKey;
    if ( params.length > 0 ) {
      activeKey = params[0].value;
    }
    return {
      activeKey: activeKey,
      hashParams: hashParams,
    };
  }

  render(): React.ReactNode {
    return (
      <Tabs
        id={ this.props.id }
        variant={ this.props.variant }
        activeKey={ this.state.activeKey }
        defaultActiveKey={ this.props.defaultActiveKey }
        className={ this.props.className }
        mountOnEnter={ true }
        unmountOnExit={ true }
        onSelect={ this.tabDidSelectHandler }
      >
        { this.props.children }
      </Tabs>
    );
  }
}
export default withRouter( HashTabs );

