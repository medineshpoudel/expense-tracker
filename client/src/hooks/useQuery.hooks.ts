/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ActionHandlerActions from '../constants/StaticLists';
import AppService from '../services/App.service';

export interface useQueryHookProps {
  query: string;
  data?: any;
}

// eslint-disable-next-line no-unused-vars
const useQueryHook = ({ query }: useQueryHookProps) => {
  const [items, setItems] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    AppService.get({ query })
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
        return null;
      })
      .catch((error: any) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, [items, isLoading]);

  const addItem = ({ item }: any) => {
    setIsLoading(true);
    AppService.add({ query, data: item })
      .then((response) => {
        setItems((prevData: any) => [response.data, ...prevData]);
        toast.success('Added successfully');
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  const updateItem = ({ item }: any) => {
    setIsLoading(true);
    AppService.update({ query, data: item })
      .then((response) => {
        setItems((prevData: any) => [response.data, ...prevData]);
        toast.success('Updated successfully');
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  const deleteItem = ({ id, item }: any) => {
    setIsLoading(true);
    AppService.delete({ query: `${query}/${id}`, data: item })
      .then((response) => {
        const newItems = items.filter((deletedItem: any) => deletedItem.id !== response.data.id);
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
