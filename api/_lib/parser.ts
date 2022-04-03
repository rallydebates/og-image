import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { pathname, query } = parse(req.url || '/', true);
    const { fontSize, images, widths, heights, theme, md, hostImg, inviteeImg, topic } = (query || {});

    if (Array.isArray(fontSize)) {
        throw new Error('Expected a single fontSize');
    }
    if (Array.isArray(theme)) {
        throw new Error('Expected a single theme');
    }
    if (Array.isArray(hostImg)) {
        throw new Error('Expected a single host image');
    }
    if (Array.isArray(inviteeImg)) {
        throw new Error('Expected a single invitee image');
    }
    if (Array.isArray(topic)) {
        throw new Error('Expected a single topic');
    }
    
    const arr = (pathname || '/').slice(1).split('.');
    let extension = '';
    let text = '';
    if (arr.length === 0) {
        text = '';
    } else if (arr.length === 1) {
        text = arr[0];
    } else {
        extension = arr.pop() as string;
        text = arr.join('.');
    }

    const parsedRequest: ParsedRequest = {
        fileType: extension === 'jpeg' ? extension : 'png',
        text: decodeURIComponent(text),
        theme: theme === 'light' ? 'light' : 'dark',
        md: md === '1' || md === 'true',
        fontSize: fontSize || '72px',
        images: getArray(images),
        widths: getArray(widths),
        heights: getArray(heights),
        hostImg: hostImg || "", 
        inviteeImg: inviteeImg || "", 
        topic: topic || "",
    };
    return parsedRequest;
}

function getArray(stringOrArray: string[] | string | undefined): string[] {
    if (typeof stringOrArray === 'undefined') {
        return [];
    } else if (Array.isArray(stringOrArray)) {
        return stringOrArray;
    } else {
        return [stringOrArray];
    }
}
