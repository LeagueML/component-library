import React from "react";
import Card from "../Card";
import { CardProps } from "../Card/Card.types";
import ErrorBoundaryCard, { ErrorBoundaryCardProps } from "../ErrorBoundaryCard/ErrorBoundaryCard";

export interface RootLayoutCardProps extends ErrorBoundaryCardProps, CardProps {}


function RootLayoutCard(props : RootLayoutCardProps) {
    return (
        <ErrorBoundaryCard>
            <Card {...props} />
        </ErrorBoundaryCard>
    )
}

export default RootLayoutCard;
