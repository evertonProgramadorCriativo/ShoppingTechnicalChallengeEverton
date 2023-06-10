"use client"
import styled from 'styled-components';
import { PrimaryInputWSearchIcon } from './primary-input';

import { Saira_Stencil_One } from 'next/font/google'
import { CartControl } from './cart-control';

const sairaStencial = Saira_Stencil_One({ subsets: ['latin'] , weight: [ '400' ]})


 interface HeaderProps {

 }

 const TagHeader = styled.header`
 display:flex;
 align-items: center;
 justify-content: space-between;
 padding: 20px 160px;

 > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
 }
 `
 const Logo = styled.a`
 color:var(--logo-color);
 font-weight: 400;
 font-size: 40px;
 line-height: 150%;
 `

 export function Header(props: HeaderProps) {
    return (
        <TagHeader>
           <Logo className={sairaStencial.className}>Capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon placeholder='Procurando por algo específico?' />
                <CartControl/>
            </div>
        </TagHeader>
    )
 }