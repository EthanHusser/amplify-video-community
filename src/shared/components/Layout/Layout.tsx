import React from 'react'
import { NavBar } from '../'
import theme from '../theme'

import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify'
import awsmobile from '../../../aws-exports'

Amplify.configure(awsmobile)

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <NavBar theme={theme} />
            {children}
        </div>
    )
}

export default withAuthenticator(Layout)