const pendingBase = (state, action, callback) => {
  const { requestId } = action.meta;
  if (!state.loading) {
    state.loading = true;
    state.currentRequestId = requestId;
    if (typeof callback === "function") {
      callback(state, action);
    }
  }
};

const fulfilledBase = (state, action, callback) => {
  const { requestId } = action.meta;
  if (state.loading && state.currentRequestId === requestId) {
    state.loading = false;
    state.currentRequestId = undefined;
    state.error = null;
    if (typeof callback === "function") {
      callback(state, action);
    }
  }
};

const rejectedBase = (state, action, callback) => {
  state.loading = false;
  state.error = action.error;
  state.currentRequestId = undefined;
  if (typeof callback === "function") {
    callback(state, action);
  }
  console.error(action.error);
};

function thunkBaseCases(builder, thunk, config) {
  builder.addCase(thunk.pending, (state, action) => {
    pendingBase(state, action, config.pendingCallback);
  });
  builder.addCase(thunk.fulfilled, (state, action) => {
    fulfilledBase(state, action, config.fulfilledCallback);
  });
  builder.addCase(thunk.rejected, (state, action) => {
    rejectedBase(state, action, config.rejectedCallback);
  });
}

export { pendingBase, fulfilledBase, rejectedBase };

export default thunkBaseCases;
