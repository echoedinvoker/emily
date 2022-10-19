# **_會議內容梳理與建議_**

## **ASKA: 使用 LINE@ 與客戶進行人工式的問答**

### _Message API_

- 是 AI Bot 回覆問題方式，而且不能與人工回覆同時使用。
  > 是否能夠先使用 AI Bot 蒐集比較格式化的問題回覆，再切換到人工回覆，目前很多網站也是這樣做，但不確定 LINE@ 可不可以。
- 文件有蒐集使用者回覆的 API，會得到 JSON 資料。
  > 有 JSON 資料的話 Emily 就比較容易做資料處理，但是還是要看實際資料內容跟需求。

### _人工回覆(目前客服使用)_

> 逛了一下 LINE 官網我是只看到 CSV/JSON 備分。
>
> > **備份**應該是針對**全部**對話紀錄，這樣就比較麻煩。

> > 但是如果有單件客服的對話紀錄的話，Emily 有一個 module 是調用 GCP NLP 進行文章內容的情緒分析，這樣可以將 Google Sheet 的情緒欄位做自動化的判讀。

- 使用 Google Sheet 將每筆客服紀錄做分類、追蹤。

  - Google Sheet 組成：
    - 一般欄位
    - 問題分類
    - 處理作為(短程)
    - 延伸/系統性問題(長程)
  - Google Sheet 每筆資料的填寫沒辦法有固定流程。
    - 理由：
      - 固定的問答流程與不符和實際的客服狀況。
      - 與客戶一來一往的問答可能會拖很久
        - 甚至可能要轉到工程部或者會有延伸的系統性問題需要解決。
  - Emily 部分建議：

    > Emily 有 Google Sheet Module 是直接把一份 Sheet 資料轉換成 Object 後直接使用 Low-Code 方式撰寫資料處理的邏輯。所以這部分不存在流程問題。

    > 但如果後續要持續進行追蹤、或者長期需要一直修修改改的話。 Sheet 上面每筆客服資料要有 id 或 key 對應相同客戶聊天紀錄。這樣 Emily 後續如果需要進行 Sheet 的修正的話才能依循 id 找到 Sheet 上面正確的資料進行編輯。

# **_結論_**

你們可以考慮使用 Line 官方提供的 Message API 先用 Bot 從客戶方蒐集一些資料，也可以自動回覆一些問題，這部分不需要用到 Emily 但是應該可以節省一些客服的 Loading。

Message API 蒐集到的資料是 JSON，之後如果你們想導入 Google Sheet 或者資料庫、資料處理、根據資料自動發信之類的工作會比較適合用 Emily 介入將其自動化。