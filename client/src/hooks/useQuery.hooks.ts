/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ActionHandlerActions from '../constants/StaticLists';
import AppService from '../services/App.service';
import { ModalContext } from '../context/ModalProvider';

export interface useQueryHookProps {
  query: string;
  data?: any;
}

// eslint-disable-next-line no-unused-vars
const useQueryHook = ({ query }: useQueryHookProps) => {
  const [items, setItems] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setModalState, closeModal } = useContext(ModalContext);

  const fetchData = async () => {
    setIsLoading(true);
    AppService.get({ query })
      .then((response) => {
        const newData = response.data.map((responseData: any) => ({
          id: responseData._id,
          ...responseData,
        }));
        setItems(newData);
        setIsLoading(false);
        return null;
      })
      .catch((error: any) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addItem = ({ item }: any) => {
    setIsLoading(true);
    AppService.add({ query, data: item })
      .then((response) => {
        const responseData = { id: response.data._id, ...response.data };
        setItems((prevData: any) => [responseData, ...prevData]);
        toast.success('Added successfully');
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.response.data.error.message);
      });
  };

  const updateItem = ({ item }: any) => {
    setIsLoading(true);
    AppService.update({ query: `${query}/${item.id}`, data: item })
      .then((response) => {
        const responseData = { id: response.data._id, ...response.data };
        const updatedData = items.filter((filterData: any) => filterData.id !== response.data._id);
        setItems([responseData, ...updatedData]);
        toast.success('Updated successfully');
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.response.data.error.message);
      });
  };

  const deleteItem = ({ item }: any) => {
    setIsLoading(true);
    AppService.delete({ query: `${query}/${item.id}`, data: item })
      .then((response) => {
        const newItems = items.filter((deletedItem: any) => deletedItem._id !== response.data._id);
        setItems(newItems);
        toast.success('Deleted successfully');
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  const onActionHandler = ({ action, item }: any) => {
    switch (action) {
      case ActionHandlerActions.Add:
        return addItem({ item });
      case ActionHandlerActions.Update:
        return updateItem({ item });
      case ActionHandlerActions.Delete:
        return deleteItem({ item });
      default:
        return null;
    }
  };

  return { items, isLoading, onActionHandler };
};

export default useQueryHook;
