import { useParams } from "react-router-dom";
import { activities } from "../db";

export default function useActivityById(){
    const { id } = useParams();

    const activity = activities.find(x => x.id === id);

    return activity;
}