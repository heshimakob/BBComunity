import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import TaskTitle from "../../components/TaskTitle"

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import {
  AnnouncementContainer,
  Content,
  Title,
  AnnouncementForm,
  FormGroup,
  Label,
  TextArea,
  Button,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementContent,
} from '../../styles/AnnouncementStyles';
import Tabs from '../../components/Tabs';
import Courses from './Courses';
import Event from './Event';
import { IoMdAdd } from 'react-icons/io';

const TABS = [
  { title: "Board View", icon: <MdGridView /> },
  { title: "List View", icon: <FaList /> },
];


const Member=()=> {

  const params = useParams();
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return loading ? (
    <div className='py-10'>
      <Loading />
    </div>
  ) : (
    <AnnouncementContainer>
    <div className='w-full'>
      {/* <div className='flex items-center justify-between mb-4'>
        <Title title={status ? `${status} Tasks` : "Tasks"} />

        {!status && (
          <Button
            onClick={() => setOpen(true)}
            label='Create Task'
            icon={<IoMdAdd className='text-lg' />}
            className='flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5'
          />
        )}
      </div> */}

      <Tabs tabs={TABS} setSelected={setSelected}>
    

        {selected !== 1 ? (
          <Courses />
        ) : (
          <div className='w-full'>
            <Event/>
          </div>
        )}
      </Tabs>

      {/* <AddTask open={open} setOpen={setOpen} /> */}
    </div>
    </AnnouncementContainer>
  );
};


export default Member;